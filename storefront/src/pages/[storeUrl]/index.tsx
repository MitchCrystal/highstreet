import MainLayout from '@/layouts/MainLayout';

function StoreHome() {
  return (
    <>
      <p>Store home</p>
    </>
  );
}

export default function () {
  return (
    <MainLayout title="name">
      <StoreHome />
    </MainLayout>
  );
}
