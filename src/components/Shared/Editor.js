// import React, { Component } from "react";
// import { convertToRaw, convertFromRaw, EditorState, Editor } from "draft-js";
// import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";

// class RichEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//     };
//   }

//   onChange = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   convertToRaw = () => {
//     this.setState({
//       convertedContent: this.state.editorState.getCurrentContent(),
//     });
//   };

//   render() {
//     return (
//       <div className="main">
//         <Editor editorState={this.state.editorState} onChange={this.onChange} />
//         <div>
//           <button onClick={this.convertToRaw}>Convert to raw</button>
//           <pre>{JSON.stringify(this.state.convertedContent, null, 2)}</pre>
//         </div>
//       </div>
//     );
//   }
// }

// export default RichEditor;
