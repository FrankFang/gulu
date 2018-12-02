function fn (n) {

  if (n < 10) {
    if (n < 5) {
      return '很小'
    } else {
      return '小'
    }
  } else {
    return '大'
  }
}

export default fn
