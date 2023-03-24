<template>
    <div class="mt-15">
        <DashboardSlider />
        <DashboardAccountDetail />
        <DashboardAlert />
        <DashboardOrderList />
        <DashboardLastNews />  </div>
</template>

<script>
import DashboardSlider from '@/components/page/Profile/UserDashboard/DashboardSlider'
import DashboardAccountDetail from '@/components/page/Profile/UserDashboard/DashboardAccountDetail';
import DashboardOrderList from "@/components/page/Profile/UserDashboard/DashboardOrderList";
import DashboardLastNews from '@/components/page/Profile/UserDashboard/DashboardLastNews'
import DashboardAlert from '@/components/page/Profile/UserDashboard/DashboardAlert'
export default {
    name: 'ProfileIndex',
    components: {
        DashboardOrderList,
        DashboardSlider,
        DashboardLastNews,
        DashboardAccountDetail,
        DashboardAlert
    },
    layout: 'profile',
};
</script>