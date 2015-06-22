var Hero = React.createClass({displayName: "Hero",
  render: function(){

    var skill_order = this.props.skill_order.map(function(skill, index, skill_order){
      return React.createElement("li", null, skill)
    })

    return React.createElement("hero", {className: this.props.spec}, 
      React.createElement("span", {className: "hero-name"}, this.props.name), 
      React.createElement("skill_order", null, 
        React.createElement("ol", null, 
          skill_order
        )
      )
    )

  }

})
;
