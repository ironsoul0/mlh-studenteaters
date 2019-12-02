export const choosePost = (chosen) => ({
  type: "CHOOSE_POST",
  chosen 
});

export const toggleEdit = () => ({
  type: "TOGGLE_EDIT"
});

export const feedbackChange = (text) => ({
  type: "FEEDBACK_CHANGE",
  text
});