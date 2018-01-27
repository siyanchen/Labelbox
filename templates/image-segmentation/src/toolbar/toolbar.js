import React, { Component } from 'react';
import { Tool } from './tool';
import Button from 'material-ui/Button';

export class Toolbar extends React.Component {
  render() {
    const { tools, toolChange, currentTool } = this.props;

    return (
      <div className="toolbar">
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <div style={{margin: '20px 15px 10px', fontWeight: '700'}}>Select a class below</div>
          {
            tools.map(({name, color}, index) => (
              <Tool
                key={index}
                name={name}
                color={color}
                count={1}
                onClick={() => toolChange(index)}
                selected={index === currentTool}
              />
            ))
          }
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <div style={{margin: '20px 15px 10px', fontWeight: '700'}}>Keyboard shortcuts</div>
          <div style={{display: 'flex', flexGrow: '1', borderBottom: '1px solid #c1c1c1', fontSize: '12px', padding: '10px 15px', color: 'grey'}}>
            <div style={{display: 'flex', flexGrow: '1'}}>
              <div style={{flex: '60'}}>Toggle Annotation</div>
              <div style={{flex: '40'}}>Spacebar</div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexGrow: '1', flexDirection: 'column'}}></div>
        <div style={{display: 'flex', justifyContent: 'flex-end', margin: '15px'}}>
          <Button color="primary" raised={true}>Submit</Button>
        </div>
      </div>
    );
  }
}
