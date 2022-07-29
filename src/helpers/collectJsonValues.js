export const collectJsonValues = (array) =>
  array.reduce((obj, { pname: property, value }) => {
    if (/^\d+$/.test(property)) {
      return Object.assign(obj, { [property]: Number(value) });
    }
    if (value === 'true') {
      return Object.assign(obj, { [property]: true });
    }
    if (value === 'false') {
      return Object.assign(obj, { [property]: false });
    }
    return Object.assign(obj, { [property]: value });
  }, {});
