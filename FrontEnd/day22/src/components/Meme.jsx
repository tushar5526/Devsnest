import { useState } from "react";

// Jt&9Kb7nbk2iWSa
function Meme({ meme, setMeme }) {
    const [form, setForm] = useState(
        {
            template_id: meme.id,
            username: "tushar5526",
            password: "qwerty@123",
            boxes: [],
        }
    )
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.success)
                    setMeme({ ...meme, url: data.data.url })
            })
    }
    return (
        <div className="meme">
            <img src={meme.url} alt=""></img>
            <div>
                {
                    [...Array(meme.box_count)].map((_, id) => (
                        <input key={id}
                            onChange={(e) => {
                                const newBoxes = form.boxes;
                                newBoxes[id] = { text: e.target.value };
                                setForm({ ...form, boxes: newBoxes });
                            }}></input>
                    ))
                }
            </div>
            <button onClick={generateMeme}>Generate Meme</button>
            <button onClick={() => setMeme(null)}>Choose template</button>
        </div>
    )
}

export default Meme;