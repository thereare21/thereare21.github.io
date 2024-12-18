


const ProjectCard = () => { return new Promise(async (resolve, reject) => {

    try {
        const response = await fetch('src/projects.json');
        const projectDataArray = await response.json();

        projectDataArray.forEach((projectData, index) => {
            const domContainer = document.querySelector(`#project-card-${index}`);
            const root = ReactDOM.createRoot(domContainer);

            root.render(
                React.createElement(ProjectCardComponent, projectData)
            );
        });
        console.log('Success')
        resolve();

    } catch(error) {
        console.error('Error fetching or rendering project data: ', error);
        reject('Failed to populate project containers');
    }
})};

function ProjectCardComponent(props) {
  // Create React elements using React.createElement

  const container = 
  React.createElement('a', {href: props.websiteLink},
    React.createElement('div', { className: 'project' }, 
        React.createElement('div', {className: 'row'},
            React.createElement('h3', null, props.name),
            React.createElement('p', null, props.description),
            //React.createElement('a', { href: props.websiteLink, target: '_blank', rel: 'noopener noreferrer', className: 'btn btn-primary' }, 'Link'),
            React.createElement('h5', null, props.tools)
        ), 
    React.createElement('div', {className: 'row'},
        React.createElement('img', { src: props.imageSrc, alt: props.name, style: { height: '290px', width: 'auto'}, className: 'img-fluid rounded' })
    )));

  return container;

  /*
  return React.createElement('div', { className: 'project row' },
    React.createElement('div', {className: 'col-md-6'},
        React.createElement('h3', null, props.name),
        React.createElement('p', null, props.description),
        React.createElement('a', { href: props.websiteLink, target: '_blank', rel: 'noopener noreferrer', className: 'btn btn-primary' }, 'Link'),
        React.createElement('h5', null, props.tools)
    ),
    React.createElement('div', {className: 'col-md-6'},
        React.createElement('img', { src: props.imageSrc, alt: props.name, className: 'img-fluid' })
    )
  );*/
}

ProjectCardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    websiteLink: PropTypes.string.isRequired,
};


export default ProjectCard;