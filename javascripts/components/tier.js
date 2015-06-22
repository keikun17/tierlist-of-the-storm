var Tier = React.createClass({displayName: "Tier",
  render: function(){

    var heroes = this.props.heroes.map(function(hero, index, heroes){
      return React.createElement(Hero, {name: hero.name, skill_order: hero.skill_order, spec: hero.spec})
    });

    return React.createElement("tier", null, 
      React.createElement("span", {className: "tier-rank"}, "TIER ", this.props.level), 
      React.createElement("heroes_list", null, 
        heroes
      )
    )
  }
})
;
