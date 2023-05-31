import { Outlet, Link } from "react-router-dom";

export default function IssuesLayout() {

    return (
        <div>
            <div className="container-lg">
                <h4 className="mb-3">Issues</h4>

                <div className="d-grid gap-2 d-md-block">
                    <form className="row align-items-center mb-5">
                        <div className="col-sm-5 md-4 col-xl-3 mb-2">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary mb-2 justify-content-center">Create</button>
                            </div>
                        </div>
                    </form>
                </div>

                <Outlet />
            </div>
        </div>
    )
}
