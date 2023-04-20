import React, { useState } from 'react';
import './CharityBeneficiaryStories.css';

const CharityBeneficiaryStories = () => {
  const [stories, setStories] = useState([]);
  const [storyInput, setStoryInput] = useState("");
  const [editingStory, setEditingStory] = useState(null);
  const [editingStoryInput, setEditingStoryInput] = useState("");

  return (
    <div className="charity-beneficiary-stories">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStories([...stories, { id: Date.now(), text: storyInput }]);
          setStoryInput("");
        }}
      >
        <input
          type="text"
          placeholder="Add a beneficiary story"
          value={storyInput}
          onChange={(e) => setStoryInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            {editingStory === story.id ? (
              <>
                <input
                  type="text"
                  value={editingStoryInput}
                  onChange={(e) => setEditingStoryInput(e.target.value)}
                />
                <button
                  onClick={() => {
                    setStories(
                      stories.map((s) =>
                        s.id === story.id ? { ...s, text: editingStoryInput } : s
                      )
                    );
                    setEditingStory(null);
                  }}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span>{story.text}</span>
                <button onClick={() => setEditingStory(story.id)}>Edit</button>
                <button
                  onClick={() => setStories(stories.filter((s) => s.id !== story.id))}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharityBeneficiaryStories;
