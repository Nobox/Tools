<?php

class BaseController extends Controller {

    /**
     * Common class variable that will store all data sent to views.
     * Useful to have this so we can set View data anywhere in the
     * chain before sending it to the View.
     *
     * @var data
     */
    protected $data = [];

    /**
     * Common logic for all controllers.
     *
     * @return void
     */
    public function __construct()
    {
        // Set some meta data useful to have in all views.
        $this->data['locale']      = Config::get('app.locale');
        $this->data['route']       = Route::current()->getName();
        $this->data['environment'] = App::environment();
    }
}
