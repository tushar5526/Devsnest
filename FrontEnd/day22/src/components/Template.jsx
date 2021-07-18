import './App.css';

const Template = ({ templates, setMeme }) => {
    return (
        <div className="templates">
            {
                templates.map((template) => (
                    <div className="template" key={template.id} onClick={() => setMeme(template)}>
                        <div style={{ backgroundImage: `url(${template.url})` }} className="image">
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Template;