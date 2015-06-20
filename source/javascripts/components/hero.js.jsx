var Hero = React.createClass({
  render: function(){

    var skill_order = this.props.skill_order.map(function(skill, index, skill_order){
      return <li>{skill}</li>
    })

    return <hero className={this.props.spec}>
      <span className="hero-name">{this.props.name}</span>
      <skill_order>
        <ol>
          {skill_order}
        </ol>
      </skill_order>
    </hero>

  }

})
