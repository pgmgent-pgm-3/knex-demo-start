/**
 * A module with some custom block helpers
 */

import handlebarsHelpers from "handlebars-helpers";
const handyHelpers = handlebarsHelpers();

const myHelpers = {
  bold: function (text) {
    return `<strong>${text}</strong>`;
  },
};

export default { ...handyHelpers, ...myHelpers };
