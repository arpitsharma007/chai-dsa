function recurLength(string) {
  if (string === "") {
    return 0;
  }

  return 1 + recurLength(string.substring(1));
}
