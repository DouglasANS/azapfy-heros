export function SetIconAligment(type) {
    switch (type) {
      case 'good':
        return './goodIcon.png'
      case 'bad':
        return './badIcon.png'
      default:
        return './null.png'
    }
  }