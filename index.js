export function getAnimal(name) {
  if (name === "cats") {
    return `I totally love cats!`;
  }
  if (name && name !== "cats") {
    return `I like ${name}!`;
  }
  if (!name) {
    return `I do not like animals at all!`;
  }
}
