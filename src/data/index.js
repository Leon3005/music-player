import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "3005",
      cover:
        "https://ca-times.brightspotcdn.com/dims4/default/4ff1f81/2147483647/strip/true/crop/1600x1600+0+0/resize/840x840!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8a%2F88%2F7c3cb91c19657f70b0edaad7fd20%2Fla-xpm-photo-2013-dec-09-la-et-ms-childish-gambino-because-internet-review-20131210",
      artist: "Childish Gambino",
      audio:
        "https://lwmusicplayer.s3.eu-west-2.amazonaws.com/3005+-+Childish+Gambino+(Lyrics).mp3",
      color: ["#B73E21", "#E2A0FF"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Nights",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
      artist: "Frank Ocean",
      audio:
        "https://lwmusicplayer.s3.eu-west-2.amazonaws.com/Frank+Ocean+-+Nights.mp3",
      color: ["#B7FFD8", "#020202"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Wasting Time",
      cover:
        "https://resources.tidal.com/images/0cb50d68/b03b/46b7/90cb/3e3bb0b5ef08/640x640.jpg",
      artist: "Brent Faiyaz",
      audio:
        "https://lwmusicplayer.s3.eu-west-2.amazonaws.com/Brent+Faiyaz+Ft+Drake+-+Wasting+Time+(Audio).mp3",
      color: ["#D00000", "#FFBA08"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Red Bottom Sky",
      cover:
        "https://media.pitchfork.com/photos/59f9f6110f8bbf5002e775db/1:1/w_600/Stranger_Yung%20Lean.jpg",
      artist: "Yung Lean",
      audio:
        "https://lwmusicplayer.s3.eu-west-2.amazonaws.com/Yung+Lean+-+Red+Bottom+Sky.mp3",
      color: ["#3A0300", "#E72B03"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
