const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  const { brideName, groomName, htmlContent } = JSON.parse(event.body);

  const fileName = `${groomName.replace(/\s/g, "")}And${brideName.replace(/\s/g, "")}.html`;
  const filePath = path.join(__dirname, "../../public-invites", fileName);

  fs.writeFileSync(filePath, htmlContent);

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: `https://wiminvite.netlify.app/public-invites/${fileName}`,
      message: "Invite published!"
    })
  };
};
