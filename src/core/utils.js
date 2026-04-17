export const getID = (string) => {
  return string.replace(/\s/g, "").toLowerCase();
};


export const isSkills = (string) => {
  return string.toLowerCase() === "skills" || string.toLowerCase() === "kenntnisse"
}


export const isCertificates = (string) => {
  return string.toLowerCase() === "skills" || string.toLowerCase() === "zertifikate"
}