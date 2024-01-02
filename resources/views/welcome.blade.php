<x-app>
<div class="container-fluid pt-4 px-4">
    <div class="row g-4">
        <div class="col-sm-6 col-xl-3">
            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-user fa-3x text-primary"></i>

                <div class="ms-3">
                    <p class="mb-2">Total Admin</p>
                    <h6 class="mb-0 text-dark">{{ $totalAdmins }}</h6>
                </div>
            </div>
        </div>
        
        <div class="col-sm-6 col-xl-3">
            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-users fa-3x text-primary"></i>

                <div class="ms-3">

                    <p class="mb-2">Total Pendonor</p>
                    <h6 class="mb-0 text-dark">{{ $totalPendonor }}</h6>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-area fa-3x text-primary"></i>
                <div class="ms-3">
                    <p class="mb-2">Total Darah</p>
                    <h6 class="mb-0 text-dark">$1234</h6>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-pie fa-3x text-primary"></i>
                <div class="ms-3">
                    <p class="mb-2">Info</p> 
                    <h6 class="mb-0 text-dark">{{ $totalInfo }}</h6>
                </div>
            </div>
        </div>
    </div>
</div>
</x-app>
