// Перетворення та форматування локації
export const reformatLocation = (location) => {
  const [firstPart, secondPart] = location.split(",").map(str => str.trim());
  return secondPart ? `${secondPart}, ${firstPart}` : location;
};

// Обрізання опису до певної довжини
export const shortenDescription = (description) => {
  const limit = 62;
  return description.length > limit ? `${description.substring(0, limit)}...` : description;
};

// Форматування рядка, де перша літера велика
export const toTitleCase = (input) => {
  if (!input || ["AC", "TV"].includes(input)) return input;
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

// Формування запиту за типом
export const createTypeQuery = (type) => type ? `&form=${type}` : "";

// Формування запиту за наявністю обладнання
export const createEquipmentQuery = (filters, equipment) => {
  const equipmentMap = {
    transmission: "&transmission=automatic",
    ac: "&AC=true",
    tv: "&TV=true"
  };

  return filters.includes(equipment) ? (equipmentMap[equipment] || `&${equipment}=true`) : "";
};
