import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveLink?: string;
  githubUrl?: string;
  featured: boolean;
}

interface ProjectsState {
  projects: Project[];
  filteredProjects: Project[];
  activeFilter: string;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  filteredProjects: [],
  activeFilter: 'all',
  loading: false,
  error: null,
};

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/work`);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch projects');
    }
  }
);

console.log(fetchProjects)
const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    filterProjects: (state, action) => {
      const filter = action.payload;
      state.activeFilter = filter;
      
      if (filter === 'all') {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter(project => 
          project.category === filter
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.filteredProjects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { filterProjects } = projectsSlice.actions;

export default projectsSlice.reducer;