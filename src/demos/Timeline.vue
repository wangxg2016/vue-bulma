<template>
<xcontent :classname="'bg-light'">
  <span slot="title">Timeline</span>
<timeline>
    <timeline-item :label="true">
      <span class="tag is-danger">
        10 Feb. 2014
      </span>
    </timeline-item>
            <timeline-item>
              <span class="fa fa-envelope tag is-info"></span>

              <div class="timeline-item">
                <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

                <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                <div class="timeline-body">
                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                  weebly ning heekya handango imeem plugg dopplr jibjab, movity
                  jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                  quora plaxo ideeli hulu weebly balihoo...
                </div>
                <div class="timeline-footer">
                  <a class="button is-primary is-small">Read more</a>
                  <a class="button is-danger is-small">Delete</a>
                </div>
              </div>
            </timeline-item>
            <!-- END timeline item -->
            <!-- timeline item -->
            <timeline-item>
              <span class="fa fa-user tag is-primary"></span>

              <div class="timeline-item">
                <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>

                <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request</h3>
              </div>
            </timeline-item>
            <!-- END timeline item -->
            <!-- timeline item -->
            <timeline-item>
              <span class="fa fa-comments tag is-danger"></span>

              <div class="timeline-item">
                <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>

                <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                <div class="timeline-body">
                  Take me to your leader!
                  Switzerland is small and neutral!
                  We are more like Germany, ambitious and misunderstood!
                </div>
                <div class="timeline-footer">
                  <a class="button is-info is-small">View comment</a>
                </div>
              </div>
            </timeline-item>
            <!-- END timeline item -->
            <!-- timeline time label -->
            <timeline-item :label="true">
                  <span class="tag is-primary">
                    3 Jan. 2014
                  </span>
            </timeline-item>
            <!-- /.timeline-label -->
            <!-- timeline item -->
            <timeline-item>
              <span class="fa fa-camera  tag is-danger"></span>

              <div class="timeline-item">
                <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>

                <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                <div class="timeline-body">
                  <img src="http://placehold.it/150x100" alt="..." class="margin">
                  <img src="http://placehold.it/150x100" alt="..." class="margin">
                  <img src="http://placehold.it/150x100" alt="..." class="margin">
                  <img src="http://placehold.it/150x100" alt="..." class="margin">
                </div>
              </div>
            </timeline-item>
            <!-- END timeline item -->
            <!-- timeline item -->
            <timeline-item>
              <span class="fa fa-video-camera tag is-success"></span>

              <div class="timeline-item">
                <span class="time"><i class="fa fa-clock-o"></i> 5 days ago</span>

                <h3 class="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>

                <div class="timeline-body">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameborder="0" allowfullscreen=""></iframe>
                  </div>
                </div>
                <div class="timeline-footer">
                  <a href="#" class="button is-success is-small">See comments</a>
                </div>
              </div>
            </timeline-item>
            <!-- END timeline item -->
            <timeline-item>
              <span class="fa fa-clock-o tag is-white"></span>
            </timeline-item>
  </timeline>
</xcontent>
</template>
<script>
import { Timeline, TimelineItem } from '../components/timeline'
import { Xcontent } from '../components/page'
export default {
  components: {
    Timeline,
    TimelineItem,
    Xcontent
  }
}
</script>