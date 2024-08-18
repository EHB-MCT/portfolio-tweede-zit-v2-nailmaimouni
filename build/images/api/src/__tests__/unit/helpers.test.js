const {
    checkCoursesName
} = require("../../helpers/endpointHelpers.js");


test("check name", () => {

    expect(checkCoursesName("")).toBe(false);
    expect(checkCoursesName(null)).toBe(false);
    expect(checkCoursesName("i")).toBe(false);
    expect(checkCoursesName(1)).toBe(false);

    expect(checkCoursesName("Design I")).toBe(true);
    expect(checkCoursesName("Full Projects I")).toBe(true);

})