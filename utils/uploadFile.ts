const uploadFile = (): Promise<File> => {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      const file = target?.files?.[0];

      if (file) {
        resolve(file);
      }

      reject();
    };

    input.click();
  });
};

export default uploadFile;
