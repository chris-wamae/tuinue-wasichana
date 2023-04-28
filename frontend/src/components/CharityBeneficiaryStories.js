import React, { useState } from "react";
import "./CharityBeneficiaryStories.css";
import NavBar from "./navbar/NavBar";

const CharityBeneficiaryStories = () => {
  const [stories, setStories] = useState([]);
  const [storyInput, setStoryInput] = useState("");
  const [name, setName] = useState("");
  const [updateName,setUpdateName] = useState("")
  const [updateStory,setUpdateStory] = useState("")
  const [editingStory, setEditingStory] = useState(null);
  const [editingStoryInput, setEditingStoryInput] = useState({
    name:"",
    story:"",
  });

  console.log(editingStoryInput);

  return (
    <>
      <NavBar elements={[]} />
      <div className="charity-beneficiary-stories">
        <div className="add-story">
        <h5 id="title">Create a new story</h5>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStories([
              ...stories,
              { id: Date.now(), story: storyInput, name: name },
            ]);
            console.log(stories);
            setStoryInput("");
          }}
        > 
          
          <input
            type="text"
            placeholder="Add a beneficiary name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add a beneficiary story"
            value={storyInput}
            onChange={(e) => setStoryInput(e.target.value)}
          />

          <button type="submit">Add</button>
        </form>
        </div>
        <h4 className="stories-title">All Stories</h4>
        <div className="stories">
         
          {stories.map((story) => (
            <div key={story.id} className="story">
              {editingStory === story.id ? (
                <>
                  <input
                    type="text"
                    placeholder="name"
                    onChange={(e) =>
                      setUpdateName(e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="story"
                    onChange={(e) =>
                      setUpdateStory(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      setStories(
                        stories.map((s) => {
                          console.log(s.id);
                          console.log(story.id);
                          return s.id === story.id
                            ? {...s,name:updateName,story:updateStory}
                            : s;
                        })
                      );
                      setEditingStory(null);
                    }}
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <h5>{story.name}</h5>
                  <span>{story.story}</span>
                  <div className="buttons">
                  <button onClick={() => setEditingStory(story.id)}>
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      setStories(stories.filter((s) => s.id !== story.id))
                    }
                  >
                    Delete
                  </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharityBeneficiaryStories;