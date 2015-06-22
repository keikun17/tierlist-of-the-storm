//= require react/react-with-addons
//= require react-router
//= require appconfig
//= require_tree ./components

var TierListApp = React.createClass({
  fetch_data: function() {
    var data = [
      {
        level: '1',
        heroes: [
          { name: 'SYLVANAS', spec: 'specialist',  skill_order: ['3', '1', '3', '3' ,'3', '4', '1'] },
          { name: 'UTHER', spec: 'support', skill_order: ['3', '1', '3', '3' ,'3', '4', '1'] },
          { name: 'KAELTHAS', spec: 'assassin', skill_order: ['3', '1', '3', '3' ,'3', '4', '1'] }
        ]
      },
    ];

    return data;
  },

  render: function() {
    var fetched_data = this.fetch_data()
    console.log(fetched_data)

    var tier_list = fetched_data.map(function(tier, index, tier_list){
      return <Tier level={tier.level} heroes={tier.heroes} />
    })

    return (
      <tier_list>
        {tier_list}
      </tier_list>
    );
  }
});

var app = document.getElementById('app');

var Routes = (
  <Route handler={TierListApp}>
    <Route name="/" handler={TierListApp}/>
  </Route>
);

var run = Router.run(Routes, function (Handler) {
  React.render(<Handler/>, app);
});

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
