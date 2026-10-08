import ProfileInfo from "@/components/profile/profile-info";
import { Navigate, useParams } from "react-router";

export default function ProfileDetailPage() {
  const params = useParams();
  const userId = params.userId;

  if (!userId) return <Navigate to={"/"} replace />;

  return (
    <div>
      <ProfileInfo userId={userId} />
    </div>
  );
}
