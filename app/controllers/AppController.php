<?php

class AppController extends BaseController {

    /**
     * Runs before any other method in this controller
     *
     * @return void
     */
    public function __construct()
    {
        // Run BaseController constructor
        parent::__construct();

        // Set a default page title
        $this->data['pageTitle'] = 'Laravel';
    }

    /**
     * Index page
     *
     * @return View
     */
    public function showIndex()
    {
        return View::make('index', $this->data);
    }

}
