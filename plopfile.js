module.exports = ( plop ) => {

  plop.setGenerator('forEach', {
    description: 'Create a forEach callback function that can be passed into a domLens.',

    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name:',
    }],

    actions: [{
      type: 'add',
      path: 'src/{{kebabCase name}}.js',
      templateFile: 'plop-templates/forEach.js',
    },
    {
      type: 'add',
      path: 'src/{{kebabCase name}}.test.js',
      templateFile: 'plop-templates/forEach.test.js',
    }],

  });
};
