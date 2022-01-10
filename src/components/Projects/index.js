import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/actions/projectActions';
import Projects from './Projects';

const ProjectsWrapper = ({isAllProjects}) => {
 
  const { projects } = useSelector(
    (state) => state.projects
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);
  return <Projects projects={projects} isAllProjects={isAllProjects} />;
};

export default ProjectsWrapper;
