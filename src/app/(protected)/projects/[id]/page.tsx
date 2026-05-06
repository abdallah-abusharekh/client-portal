import ProjectDetailsPage from "@/src/features/projects/components/ProjectDetailsPage";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <ProjectDetailsPage projectId={id} />;
}
