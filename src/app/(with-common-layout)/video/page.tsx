import VideoCall from "@/components/Ui/VideoCall/VideoCall";

const VideoCalling = ({
  searchParams,
}: {
  searchParams: { videoCallingId: string };
}) => {
  const videoCallingId = searchParams.videoCallingId;

  return <VideoCall videoCallingId={videoCallingId} />;
};

export default VideoCalling;
