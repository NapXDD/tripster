function convertString(str: string) {
  // Normalize the string to remove diacritics
  const normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Convert to lowercase
  const lowerCaseStr = normalizedStr.toLowerCase();

  // Replace spaces with hyphens
  const result = lowerCaseStr.replace(/\s+/g, "-");

  return result;
}

export function generateUrl(
  cityStart: string,
  cityEnd: string,
  datePlan: string
) {
  const codeStart = convertString(cityStart);
  const codeEnd = convertString(cityEnd);
  const url = `https://vexere.com/vi-VN/ve-xe-khach-tu-${codeStart}-di-${codeEnd}-129t181.html?date=${datePlan}&v=4`;
  return url;
}
