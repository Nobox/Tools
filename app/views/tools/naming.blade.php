<h1 class="text-center">Naming Convention Tool</h1>
<h4 class="text-center">Your filename should be:</h4>
<hr>
<div class="alert alert-success">
    <p class="text-center filename">AAA-BB-Description_of_the_file-YYYYMMDD-VXX.fileExtension</p>
</div>
<hr>

<form>
    <div class="form-group">
        <label for="deptarea">Department or Business Area</label>
        <select name="deptarea" id="deptarea" class="form-control">
            @foreach ($deptarea AS $dept)
                <option value="{{ $dept['val'] }}">{{ $dept['val']." - ".$dept['name'] }}</option>
            @endforeach
        </select>
    </div>

    <div class="form-group">
        <label for="doctype">Document Type</label>
        <select name="doctype" id="doctype" class="form-control">
            @foreach ($doctype AS $type)
                <option value="{{ $type['val'] }}">{{ $type['val']." - ".$type['name'] }}</option>
            @endforeach
        </select>
    </div>

    <div class="form-group">
        <label for="status">Status</label>
        <select name="status" id="status" class="form-control">
            @foreach ($status AS $stat)
                <option value="{{ $stat['val'] }}">{{ $stat['val']." - ".$stat['name'] }}</option>
            @endforeach
        </select>
    </div>

    <div class="form-group">
        <label for="desc">Description</label>
        <input type="text" name="desc" id="desc" class="form-control" placeholder="Nobox Homepage Hero Image" value="Sample Description">
    </div>

    <div class="form-group">
        <label for="date">Date (YYYYMMDD)</label>
        <input type="text" name="date" id="date" class="form-control" placeholder="{{ date('Ymd') }}" value="{{ date('Ymd') }}">
    </div>

    <div class="form-group">
        <label for="ver">Version</label>
        <input type="number" name="ver" id="ver" class="form-control" placeholder="1" value="1">
    </div>

    <div class="form-group">
        <label for="ext">File Extension</label>
        <input type="text" name="ext" id="ext" class="form-control" placeholder=".jpg" value=".jpg">
    </div>
</form>
