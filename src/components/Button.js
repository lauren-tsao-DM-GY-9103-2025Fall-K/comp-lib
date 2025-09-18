import React from 'react'
import cx from 'classnames'
// props = {
//   children: 'whatever elements or text inside the open close tags',
// primary: true,
// }

const Button = (props) => {
  // destructuring our props object
  const { children, primary, secondary, success, warning, danger, rounded, outline, ...otherProps} = props
  // the line above does this but with less typing
  // const children = props.children

  const classes = cx('flex items-center px-8 py-3 mx-1 my-1 border button-font', otherProps.className,{
    'bg-blue-500 border-blue-500 text-white': primary && !outline,
    'bg-gray-900 border-gray-900 text-white': secondary && !outline,
    'bg-green-500 border-green-500 text-white': success && !outline,
    'bg-orange-400 border-orange-400 text-white': warning && !outline,
    'bg-red-600 border-red-600 text-white': danger && !outline,
    //rounded
    'rounded-full': rounded,
    //outline
    'bg-white': outline,
    // outline variation in text color
    'border-blue-500 text-blue-500': outline && primary,
    'border-gray-900 text-gray-900': outline && secondary,
    'border-green-500 text-green-500': outline && success,
    'border-orange-400 text-orange-400': outline && warning,
    'border-red-600 text-red-600': outline && danger,
  })

  return <button {...otherProps} className={classes}>{children}</button>
}

export default Button