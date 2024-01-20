

const ProjectComponent = async () => {

    try {
        const response = await fetch('src/projects.json');
        const projectDataArray = await response.json();

        projectDataArray.forEach((projectData, index) => {
            const domContainer = document.querySelector(`#project-container-${index}`);
            const root = ReactDOM.createRoot(domContainer);
        

            root.render(
                React.createElement(ProjectContainer, projectData)
            );
        });

    } catch(error) {
        console.error('Error fetching or rendering project data: ', error);
    }
};

function ProjectContainer(props) {
  // Create React elements using React.createElement
  return React.createElement('div', { className: 'project row' },
    React.createElement('div', {className: 'col-md-6'},
        React.createElement('h3', null, props.name),
        React.createElement('p', null, props.description),
        React.createElement('a', { href: props.websiteLink, target: '_blank', rel: 'noopener noreferrer', className: 'btn btn-primary' }, 'Link')
    ),
    React.createElement('div', {className: 'col-md-6'},
        React.createElement('img', { src: props.imageSrc, alt: props.name, className: 'img-fluid' })
    )
  );
}

ProjectComponent.propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    websiteLink: PropTypes.string.isRequired,
};


export default ProjectComponent;