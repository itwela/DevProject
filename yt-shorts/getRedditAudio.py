import praw
from gtts import gTTS
import moviepy
from moviepy.editor import VideoFileClip, concatenate_videoclips
from selenium import webdriver
import random



reddit = praw.Reddit(
    client_id="kNCg7xBuGXtMrCT9aK8SFQ",
    client_secret="bMnpr00_qZN4Ejh0MiuOqwjZCgNKew",
    user_agent="itwela_ibomu",
)

# submission = reddit.submission(url="https://www.reddit.com/r/stories/comments/196l3ak/my_exboyfriend_got_me_a_bottle_of_wine_for_my/")
# post_text = submission.selftext

# # 

# tts = gTTS(text=post_text, lang='en')
# tts.save('output.mp3')

# # 


# Function to get Reddit post text and convert it to speech
def get_speech_from_reddit_post(url):
    submission = reddit.submission(url=url)
    post_text = submission.selftext
    tts = gTTS(text=post_text, lang='en')
    tts.save('./output.mp3')

# Function to add audio to a random section of the video
def add_audio_to_video(video_path, audio_path, output_path):
    video_clip = VideoFileClip(video_path)
    audio_clip = VideoFileClip(audio_path)

    # Get random start time within the video duration
    start_time = random.uniform(0, video_clip.duration - audio_clip.duration)

    # Cut the video into two parts, add the audio in between, and concatenate them
    part1 = video_clip.subclip(0, start_time)
    part2 = video_clip.subclip(start_time, start_time + audio_clip.duration)
    part3 = video_clip.subclip(start_time + audio_clip.duration)

    video_with_audio = concatenate_videoclips([part1, part2.set_audio(audio_clip.set_duration(part2.duration)), part3])

    # Write the result to a file
    video_with_audio.write_videofile(output_path, codec='libx264', audio_codec='aac')

# Example usage
reddit_post_url = "https://www.reddit.com/r/stories/comments/196l3ak/my_exboyfriend_got_me_a_bottle_of_wine_for_my/"
minecraft_video_path = "minc.mp4"
output_video_path = "output_video.mp4"

# Fetch Reddit post and convert text to speech
get_speech_from_reddit_post(reddit_post_url)

# driver = webdriver.Firefox()
# driver.get(reddit_post_url)

# def takeTitleScreenshot(driver, wait):
#     handle = By.CLASS_NAME
#     class = "Post"
#     search = wait.until(EC.presence_of_element_located(handle, class))

#     screenshotName = f"{screenshotDir}/{handle}.png"
#     file = open(screenshotName, "wb")
#     file.write(search.screenshot_as_png)
#     return screenshotName

# def creatClip(screenshotFile, voiceOverFIle):
#     imageClip = ImageClip(screenshotFile)
#     audioClip = AudioClip(voiceOverFIle)
#     videoClip = imageClip.set_audio(audioClip)
#     return videoClip
# # Add audio to a random section of the Minecraft video
# add_audio_to_video(minecraft_video_path, "output.mp3", output_video_path)