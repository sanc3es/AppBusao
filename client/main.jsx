import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import AppBusao from '../imports/ui/AppBusao.jsx';

Meteor.startup(() => {
  render(<AppBusao />, document.getElementById('render-target'));
});
