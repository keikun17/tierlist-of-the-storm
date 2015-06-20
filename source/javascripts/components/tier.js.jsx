var Tier = React.createClass({
  render: function(){

    var heroes = this.props.heroes.map(function(hero, index, heroes){
      return <Hero name={hero.name} skill_order={hero.skill_order} spec={hero.spec}/>
    });

    return <tier>
      <span className='tier-rank'>TIER {this.props.level}</span>
      <heroes_list>
        {heroes}
      </heroes_list>
    </tier>
  }
})
