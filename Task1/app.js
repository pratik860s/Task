class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          { id: 1, title: 'Onboarding Call', value: '' },
          { id: 2, title: 'Google Search Console Access', value: '' },
          { id: 3, title: 'Google Analytics Access', value: '' },
          { id: 4, title: 'Website Access', value: '' },
          { id: 5, title: 'Technical Audit', value: '' },
          { id: 6, title: 'Anchor Text and Semantic Analysis', value: '' },
          { id: 7, title: 'Competitor Analysis', value: '' },
          { id: 8, title: 'Anchor Text/URL Mapping', value: '' },
          { id: 9, title: 'Google Data Studio Report + Local Reporting Suite', value: '' },
          { id: 10, title: 'Site Level Optimization', value: '' },
          { id: 11, title: 'On Page Optimization', value: '' },
          { id: 12, title: 'Content Creation', value: '' },
          { id: 13, title: 'Content Publishing', value: '' },
          { id: 14, title: 'Premium Press Release', value: '' },
          { id: 15, title: 'Authority Niche Placements', value: '' },
          { id: 16, title: 'Review Management', value: '' },
          { id: 17, title: 'Index Links', value: '' },
          { id: 18, title: 'Video Recap', value: '' },
        ],
      };
    }
  
    handleChange = (event, id) => {
      const { data } = this.state;
      const newData = data.map(item => {
        if (item.id === id) {
          return { ...item, value: event.target.value };
        }
        return item;
      });
      this.setState({ data: newData });
    }
  
    prepareDataForAPI = () => {
      const { data } = this.state;
      // Assuming you want to post the data as JSON
      const postData = data.map(item => ({ title: item.title, value: item.value }));
      console.log(postData);
      // Here you can perform the API call to post the data
    }
  
    render() {
      const { data } = this.state;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'table',
          null,
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement('th', null, 'Data'),
              React.createElement('th', null, 'Details')
            )
          ),
          React.createElement(
            'tbody',
            null,
            data.map(item => React.createElement(
              'tr',
              { key: item.id },
              React.createElement('td', null, item.title),
              React.createElement(
                'td',
                null,
                React.createElement('input', { type: 'text', value: item.value, onChange: e => this.handleChange(e, item.id) })
              ),
            ))
          )
        ),
        React.createElement('button', { onClick: this.prepareDataForAPI }, 'Prepare Data for API')
      );
    }
  }
  
  ReactDOM.render(React.createElement(EditableTable, null), document.getElementById('root'));
  