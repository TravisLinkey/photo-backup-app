import { Text, TouchableOpacity } from "react-native"

type ButtonProps = {
  function: Function;
  text: string;
  type?: string;
}

export const CustomButton = (props: ButtonProps) => {
  const backgroundColor = props.type === "Submit" ? 'bg-emerald-300' : 'bg-blue-300'

  return (
    <TouchableOpacity
      className={`${backgroundColor} items-center justify-center p-1 border-2 rounded-xl`}
      onPress={() => props.function()}
    >
      <Text className="text-xl p-2 text-blue">{props.text}</Text>
    </TouchableOpacity>
  )
}
