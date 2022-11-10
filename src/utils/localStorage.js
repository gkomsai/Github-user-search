export const getItemFromLocal = (key) => {
  try {
    let temp = JSON.parse(localStorage.getItem(key));
    return temp;
  } catch (error) {
    return null;
  }
};

export const saveItemToLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
