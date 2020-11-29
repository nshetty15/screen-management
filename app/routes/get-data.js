const fs = require('fs');
const path = require('path');
const uiConfigPath = '../src/specification/ui-config/';

module.exports = (req, res) => {
  let moduleName;
  let screenName;
  const urlParams = req.params;

  if ('module_name' in urlParams) moduleName = urlParams.module_name;
  if ('screen_name' in urlParams) screenName = urlParams.screen_name;

  const filePath = path.join(
    __dirname,
    uiConfigPath,
    moduleName,
    screenName + '.json'
  );

  try {
    /* 
      using readFileSync fetches file from the hard disk.
      This ensures that data is dynamically fetched every time.
    */
    const data = fs.readFileSync(filePath, 'utf8');
    res.json({ data: JSON.parse(data) });
  } catch (err) {
    res.status(404).json({ error: 'data not found' });
  }
};
