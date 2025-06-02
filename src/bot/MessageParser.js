class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // Example: simple greeting detection
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")) {
      this.actionProvider.greet();
    }

    // if (lower.includes("?")) {
    //   this.actionProvider.searchDatabase(message);
    //   return;
    // }

    this.actionProvider.searchDatabase(message);

  }
}

export default MessageParser;