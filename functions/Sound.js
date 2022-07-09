import { Audio } from "expo-av";

export async function playSound(choiceSound) {
  if (choiceSound === "correct") {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/Popper.mp3")
    );
    setTimeout(async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sound/Correct.mp3")
      );
      await sound.playAsync();
    }, 300);
    await sound.playAsync();
  } else if(choiceSound === "wrong") {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/Wrong.mp3")
    );

    await sound.playAsync();
  } else if ( choiceSound === "nextLevel") {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/finish.wav")
    );

    await sound.playAsync();
  }  else if ( choiceSound === "finish") {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/GameFinish.mp3")
    );

    await sound.playAsync();
  }
}
