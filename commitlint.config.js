module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "always", "."],
    "subject-max-length": [2, "always", 70],
  },
};
