import DS from 'ember-data';

export default DS.Model.extend({
  username : DS.attr("string"),
  maps : DS.attr(),
  email : DS.attr("string")
});
