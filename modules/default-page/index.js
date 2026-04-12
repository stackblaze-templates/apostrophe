module.exports = {
  extend: "@apostrophecms/page-type",
  options: { label: "Default Page" },
  fields: {
    add: {
      main: { type: "area", options: { widgets: { "@apostrophecms/rich-text": {}, "@apostrophecms/image": {} } } }
    },
    group: { basics: { label: "Basics", fields: ["main"] } }
  }
};
